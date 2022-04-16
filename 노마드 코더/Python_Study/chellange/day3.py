my_english_dict = {}


def add_to_dict(dictionary, key, value=''):
    if type(my_english_dict) != type(dictionary):
        return print(f'You need to send a dictionary. You Sent: {type(dictionary)}.')
    elif value == '':
        return print('You need to send a word and a definition.')
    elif key in dictionary:
        return print(f"{key} is already on the dictionary. Won't add.")
    else:
        dictionary[key] = value
        return print(f"{key} has been added.")


def get_from_dict(dictionary, key=''):
    if key == '':
        return print('You need to send a word to search for.')
    elif type(my_english_dict) != type(dictionary):
        return print(f'You need to send a dictionary. You Sent: {type(dictionary)}.')
    elif key not in dictionary:
        return print(f"{key} was not found in this dict.")
    else:
        return print(f"{key}: {dictionary[key]}")


def update_word(dictionary, key, value=''):
    if type(my_english_dict) != type(dictionary):
        return print(f'You need to send a dictionary. You Sent: {type(dictionary)}.')
    elif value == '':
        return print('You need to send a word and a definition to update.')
    elif key not in dictionary:
        return print(f"{key} is not on the dict. Can't update non-existing word.")
    elif key in dictionary:
        dictionary[key] = value
        return print(f"{key} has been updated to: {value}")


def delete_from_dict(dictionary, key=''):
    if key == '':
        return print('You need to specify a word to delete.')
    elif type(my_english_dict) != type(dictionary):
        return print(f'You need to send a dictionary. You Sent: {type(dictionary)}.')
    elif key not in dictionary:
        return print(f"{key} is not in this dict. Won't delete.")
    elif key in dictionary:
        del dictionary[key]
        return print(f"{key} has been deleted.")


print('add_to_dict("hello", "kimchi"):')
print(add_to_dict("hello", "kimchi"))
print()

print('add_to_dict(my_english_dict, "kimchi"):')
print(add_to_dict(my_english_dict, "kimchi"))
print()

print('add_to_dict(my_english_dict, "kimchi", "The source of life"):')
print(add_to_dict(my_english_dict, "kimchi", "The source of life"))
print()

print('add_to_dict(my_english_dict, "kimchi", "My fav. food"):')
print(add_to_dict(my_english_dict, "kimchi", "My fav. food"))
print()

print('get_from_dict("hello", "kimchi"):')
print(get_from_dict("hello", "kimchi"))
print()

print('get_from_dict(my_english_dict):')
print(get_from_dict(my_english_dict))
print()

print('get_from_dict(my_english_dict, "galbi"):')
print(get_from_dict(my_english_dict, "galbi"))
print()

print('get_from_dict(my_english_dict, "kimchi"):')
print(get_from_dict(my_english_dict, "kimchi"))
print()

print('update_word("hello", "kimchi"):')
print(update_word("hello", "kimchi"))
print()

print('update_word(my_english_dict, "kimchi"):')
print(update_word(my_english_dict, "kimchi"))
print()

print('update_word(my_english_dict, "galbi", "Love it."):')
print(update_word(my_english_dict, "galbi", "Love it."))
print()

print('update_word(my_english_dict, "kimchi", "Food from the gods."):')
print(update_word(my_english_dict, "kimchi", "Food from the gods"))
print()

print('get_from_dict(my_english_dict, "kimchi"):')
print(get_from_dict(my_english_dict, "kimchi"))
print()

print('delete_from_dict("hello", "kimchi"):')
print(delete_from_dict("hello", "kimchi"))
print()


print('delete_from_dict(my_english_dict:')
print(delete_from_dict(my_english_dict))
print()

print('delete_from_dict(my_english_dict, "galbi"):')
print(delete_from_dict(my_english_dict, "galbi"))
print()

print('delete_from_dict(my_english_dict, "kimchi"):')
print(delete_from_dict(my_english_dict, "kimchi"))
print()

print('get_from_dict(my_english_dict, "kimchi"):')
print(get_from_dict(my_english_dict, "kimchi"))
print()
