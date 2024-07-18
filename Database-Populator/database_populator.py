import pandas as pd
from sqlalchemy import create_engine, MetaData, Table


def get_authors_data_frame(file_path):
    author_frame = pd.read_csv(file_path, delimiter=';', usecols=['Book-Author'])

    author_frame = author_frame.rename(columns={'Book-Author': 'AuthorName'})
    author_frame['AuthorName'] = author_frame['AuthorName'].str.lower()

    return author_frame


def remove_non_unique_authors(author_frame):
    author_frame.drop_duplicates(subset=['AuthorName'], keep='first', inplace=True)
    return author_frame


def table_to_dataframe(connection, table_name):
    metadata = MetaData()
    table = Table(table_name, metadata, autoload_with=connection)
    query = connection.execute(table.select())
    df = pd.DataFrame(query.fetchall(), columns=table.columns.keys())
    return df


def create_books_table(file_path, authors):
    dtype = {
        'Book-Title': str,
        'Image-URL-S': str,
        'Image-URL-M': str,
        'Image-URL-L': str,
        'Year-Of-Publication': str,
        'Book-Author': str
    }

    book_frame = pd.read_csv(file_path, dtype=dtype, delimiter=';',
                             usecols=['Book-Title', 'Image-URL-S', 'Image-URL-M',
                                      'Image-URL-L', 'Year-Of-Publication', 'Book-Author'])

    book_frame = book_frame.rename(columns={'Book-Title': 'BookName',
                                            'Image-URL-S': 'CoverImageS',
                                            'Image-URL-M': 'CoverImageM',
                                            'Image-URL-L': 'CoverImageL',
                                            'Year-Of-Publication': 'Year',
                                            'Book-Author': 'AuthorName'})

    book_frame['AuthorName'] = book_frame['AuthorName'].str.lower()

    book_frame['Year'] = pd.to_numeric(book_frame['Year'], errors='coerce').fillna(0).astype(int)
    book_frame = book_frame[book_frame['Year'] != 'DK Publishing Inc']  # Assuming this is a data cleanup step
    book_frame['Year'] = book_frame['Year'].astype(int)

    book_frame = pd.merge(book_frame, authors, left_on='AuthorName', right_on='AuthorName', how='left')
    book_frame = book_frame.drop(columns=['AuthorName'])
    book_frame = book_frame.dropna()

    return book_frame


if __name__ == '__main__':
    connection_url = "mssql+pyodbc://admin:JLW54NS9XQ@192.168.1.129:1433/BookReviewDB?driver=ODBC+Driver+17+for+SQL+Server"
    engine = create_engine(connection_url)
    con = engine.connect()
    #authors = get_authors_data_frame('data/books.csv')

    #authors_clean = authors.dropna(subset=['AuthorName'])
    #authors_clean.to_sql(name='Authors', con=engine, if_exists='append', index=False)

    # authors_no_duplicates = remove_non_unique_authors(authors)
    # print(authors_no_duplicates.to_string())
    authors = table_to_dataframe(con, 'Authors')
    books = create_books_table('data/books.csv', authors)
    books.to_sql(name='Books', con=engine, if_exists='append', index=False)



