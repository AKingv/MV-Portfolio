from random import randint

# Board created that will hold ship locations and another board created to appear blank for player to guess ship positions.
Hidden_Board=[[' ']*9 for x in range(9)]
Players_Guesses=[[' ']*9 for x in range(9)]
letters_to_num={'A':0,'B':1,'C':2,'D':3,'E':4,'F':5,'G':6,'H':7,'I':8}

# Board visual in terminal
def print_board(board):
    print(' A B C D E F G H I')
    print(' ***************')
    row_num=1
    for row in board:
        print("%d|%s|" % (row_num, "|".join(row)))
        row_num+=1

# Used to request ship coordinate guesses from user
def ship_locations():
    row=input('Enter a ship row 1 to 9')
    while row not in '123456789':
        print('Enter valid ship row number')
        row=input('Enter a ship row 1 to 9')

    column=input('Enter a ship column A to I').upper()
    while column not in 'ABCDEFGHI':
        print('Enter valid ship column letter')
        column=input('Enter a ship column A to I').upper()
    return int(row)-1,letters_to_num[column]

# creates ships and designates symbol for each
def ship_creation(board):
    for ships in range(7):
        ship_row, ship_column=randint(0,8), randint(0,8)
        while board[ship_row][ship_column]=='X':
            ship_r, ship_column = randint(0,8), randint(0,8)
        board[ship_row][ship_column] = 'X'

# counter for each valid ship hit
def count_hits(board):
    count=0
    for row in board:
        for column in row:
            if column=='X':
                count+=1
    return count

# setting for difficulty level
while True:
    difficulty = input("Select a difficulty to play. EASY/NORMAL/EXTREMELY HARD").upper()
    if difficulty == "EASY":
        turns =21
        break
    elif difficulty == "NORMAL":
        turns =14
        break
    elif difficulty == "EXTREMELY HARD":
        turns =7
        break
    else:
        print("Enter a valid difficulty option.")

# how turns are evaluated whether a turn is a hit or a miss
ship_creation(Hidden_Board)
while turns > 0:
    print('Welcome to Battleship!!')
    print_board(Players_Guesses)
    row,column=ship_locations()
    if Players_Guesses[row][column]=='~':
        print('You already guessed that coordinate')
    elif Hidden_Board[row][column]=='X':
        print('Congrats! You have a sunk an innocent battleship!')
        Players_Guesses[row][column]='X'
        turns -=1
    else:
        print("Pardon, but seems you've missed...")
        Players_Guesses[row][column]='~'
        turns -=1
    if count_hits(Players_Guesses)==7:
        print("Congrats! You have destroyed the armada!")
        break
    print('You have '+str(turns)+' turns remaining')
    if turns==0:
        print("Game Over, loser")
        break