using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace MSA_Phase_2.Services
{
    public class TokenServices
    {
        private readonly IConfiguration _configuration;
        private readonly SymmetricSecurityKey _symmetricKey;

        public TokenServices(IConfiguration configuration)
        {
            _configuration = configuration;
            var key = "SADKJBASDHQWEDGHWQHJRFGWQHJFWEHFWEFFBQWJLHFBEWQFYUEWRGWROWEQTEWYRUWQTURWQTROWEQRYTWERYUWETRYUQWER";
            _symmetricKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(key));
        }

        public string GenerateToken(string userId, string userName)
        {
            var tokenHandler = new JwtSecurityTokenHandler();

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[]
                {
                    new Claim(ClaimTypes.NameIdentifier, userId),
                    new Claim(ClaimTypes.Name, userName)
                }),
                Expires = DateTime.UtcNow.AddHours(1),
                SigningCredentials = new SigningCredentials(_symmetricKey, SecurityAlgorithms.HmacSha256Signature)
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);

            return tokenHandler.WriteToken(token);
        }

        public ClaimsPrincipal VerifyToken(string token)
        {
            var tokenHandler = new JwtSecurityTokenHandler();

            try
            {
                tokenHandler.ValidateToken(token, new TokenValidationParameters
                {
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = _symmetricKey,
                    ValidateIssuer = false, // You may set these to true if needed
                    ValidateAudience = false,
                    ClockSkew = TimeSpan.Zero // Remove delay of token when expire
                }, out SecurityToken validatedToken);

                if (validatedToken is JwtSecurityToken jwtToken && jwtToken.Claims != null)
                {
                    return new ClaimsPrincipal(new ClaimsIdentity(jwtToken.Claims, "jwt"));
                }
                else
                {
                    throw new SecurityTokenException("Invalid token");
                }
            }
            catch (Exception ex)
            {
                // Token validation failed
                Console.WriteLine(ex.Message); // Handle exception appropriately
                return null;
            }
        }
    }
}
