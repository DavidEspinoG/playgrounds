def merge(sorted_left, sorted_right):
  result = []
  while len(sorted_left) > 0 and len(sorted_right) > 0:
    if sorted_left[0] > sorted_right[0]:
      result.append(sorted_right[0])
      sorted_right.pop(0)
    else:
      result.append(sorted_left[0])
      sorted_left.pop(0)

  while len(sorted_left) > 0:
    result.append(sorted_left[0])
    sorted_left.pop(0)
  
  while len(sorted_right) > 0:
    result.append(sorted_right[0])
    sorted_right.pop(0)
  
  return result

def merge_sort(array):
  if(len(array) == 1):
    return array
  middle = len(array) // 2
  left_array = array[:middle]
  right_array = array[middle:]

  sorted_left_array = merge_sort(left_array)
  sorted_right_array = merge_sort(right_array)

  return merge(sorted_left_array, sorted_right_array)

array = [3,5,9,10,2,22,1,3,6]
print(merge_sort(array))

