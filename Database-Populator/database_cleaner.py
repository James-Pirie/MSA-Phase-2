from PIL import Image
import requests
from io import BytesIO
import pyodbc
from sqlalchemy import create_engine, MetaData, Table


def get_dimension(image_url):
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    }

    response = requests.get(image_url, headers=headers)
    response.raise_for_status()

    img = Image.open(BytesIO(response.content))

    width, height = img.size

    return width*height


def clean_data_base():
    connection_url = "Driver={ODBC Driver 17 for SQL Server};Server=192.168.1.129,1433;Database=BookReviewDB;UID=admin;PWD=JLW54NS9XQ;"
    conn = pyodbc.connect(connection_url)
    cursor = conn.cursor()
    counter = 0

    try:
        cursor.execute("SELECT * FROM Books")
        rows = cursor.fetchall()

        for row in rows:
            counter += 1

            print(f"{(counter/256093) * 100}%")
            cover_image_l_url = row.CoverImageL  # Assuming 'CoverImageL' is a column in your 'Books' table
            try:
                result = get_dimension(cover_image_l_url)
                if result == 1 or result is None:  # Adjust condition based on get_dimension() implementation
                    cursor.execute("DELETE FROM Books WHERE BookId=?", row.BookId)
                    conn.commit()
            except Exception as e:
                print(f"Error processing book {row.BookId}: {str(e)}")
                cursor.execute("DELETE FROM Books WHERE BookId=?", row.BookId)
                conn.commit()

    except Exception as ex:
        print(f"Error: {str(ex)}")
        conn.rollback()

    finally:
        cursor.close()
        conn.close()


if __name__ == '__main__':
    clean_data_base()