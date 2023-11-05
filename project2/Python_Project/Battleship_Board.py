#board building
board = []
for x in range (9):
    board.append(["-"] * 9)

def print_board(board):
    print(" ", " ".join("123456789"))
    for letter, row in zip("ABCDEFGHI", board):
        print(letter, " ".join(row))

print_board(board)