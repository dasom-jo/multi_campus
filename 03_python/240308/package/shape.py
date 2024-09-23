class Rectangle:
    def __init__(self,w1,h2):
        self.width = w1
        self.height = h2
    def get_perimeter(self):
        return 2 * self.__total_width_and_height__()
    def __total_width_and_height__(self):
        return self.width + self.height