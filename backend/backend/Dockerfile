FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
USER app
WORKDIR /app
EXPOSE 5220
EXPOSE 5221

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
ARG BUILD_CONFIGURATION=Release
WORKDIR /src
COPY ["MSA-Phase-2.csproj", "backend/"]
RUN dotnet restore "backend/MSA-Phase-2.csproj"
WORKDIR "/src/backend"
COPY . .
RUN dotnet build "MSA-Phase-2.csproj" -c $BUILD_CONFIGURATION -o /app/build

FROM build AS publish
ARG BUILD_CONFIGURATION=Release
RUN dotnet publish "MSA-Phase-2.csproj" -c $BUILD_CONFIGURATION -o /app/publish /p:UseAppHost=false

FROM base AS final 
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT [ "dotnet", "MSA-Phase-2.dll" ]
