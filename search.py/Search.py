import pandas as pd
from tkinter import Tk
from tkinter.filedialog import askopenfilename

def search_excel(file_path, keywords):
    # Load the Excel file
    xls = pd.ExcelFile(file_path)

    results = {}

    # Iterate through each sheet in the Excel file
    for sheet_name in xls.sheet_names:
        df = pd.read_excel(file_path, sheet_name=sheet_name)
        print(f"Searching in sheet: {sheet_name}")  # Debug print
        
        # Search for keywords in the sheet
        for keyword in keywords:
            print(f"Searching for keyword: {keyword}")  # Debug print
            mask = df.apply(lambda row: row.astype(str).str.contains(keyword, case=False, na=False).any(), axis=1)
            matches = df[mask]
            
            if not matches.empty:
                if sheet_name not in results:
                    results[sheet_name] = {}
                results[sheet_name][keyword] = matches

    return results

# Function to get user input for keywords
def get_keywords():
    keywords = []
    print("Enter keywords to search (type 'done' when finished):")
    while True:
        keyword = input("Keyword: ")
        if keyword.lower() == 'done':
            break
        keywords.append(keyword)
    return keywords

# Function to open file dialog to select the Excel file
def select_file():
    Tk().withdraw()  # Prevent Tkinter window from appearing
    file_path = askopenfilename(title="Select Excel file", filetypes=[("Excel files", "*.xlsx")])
    return file_path

# Example usage
file_path = select_file()
if file_path:
    keywords = get_keywords()
    search_results = search_excel(file_path, keywords)

    # Print results
    if search_results:
        for sheet, matches in search_results.items():
            print(f"\nSheet: {sheet}")
            for keyword, rows in matches.items():
                print(f"Keyword: {keyword}")
                print(rows)
    else:
        print("No matches found for the given keywords.")
    
    # Wait for user input before closing
    input("\nSearch completed. Press Enter to exit.")
else:
    print("No file selected.")
