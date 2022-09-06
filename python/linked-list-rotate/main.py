#!/usr/bin/python3


class LinkedList:
    def __init__(self, nodes=None):
        self.head = None
        if nodes is not None:
            node = Node(data=nodes.pop(0))
            self.head = node
            for elem in nodes:
                node.next = Node(data=elem)
                node = node.next

    def __iter__(self):
        node = self.head
        while node is not None:
            yield node
            node = node.next

    def __repr__(self):
        node = self.head
        nodes = []
        while node is not None:
            nodes.append(str(node.data))
            node = node.next
        nodes.append("None")
        return " -> ".join(nodes)

    def add_first(self, node):
        node.next = self.head
        self.head = node

    def add_last(self, node):
        if self.head is None:
            self.head = node
            return
        for currentNode in self:
            pass
        currentNode.next = node

    def add_after(self, targetNodeData, newNode):
        if self.head is None:
            raise Exception("List is empty")

        for node in self:
            if node.data == targetNodeData:
                newNode.next = node.next
                node.next = newNode
                return

        raise Exception("Node with data '%s' not found" % str(targetNodeData))

    def add_before(self, targetNodeData, newNode):
        if self.head is None:
            raise Exception("List is empty")

        if self.head.data == targetNodeData:
            return self.add_first(newNode)

        prevNode = self.head
        for node in self:
            if node.data == targetNodeData:
                prevNode.next = newNode
                newNode.next = node
                return

            prevNode = node

        raise Exception("Node with data '%s' not found" % str(targetNodeData))

    def remove_node(self, targetNodeData):
        if self.head is None:
            raise Exception("List is empty")

        if self.head.data == targetNodeData:
            self.head = self.head.next
            return

        prevNode = self.head
        for node in self:
            if node.data == targetNodeData:
                prevNode.next = node.next
                return
            prevNode = node

        raise Exception("Node with data '%s' not found" % str(targetNodeData))

    def get_last(self):
        if self.head is None:
            raise Exception("List is empty")

        node = self.head
        while node.next is not None:
            node = node.next

        return node

    def rotate_right(self, movePostions):
        if self.head is None:
            raise Exception("List is empty")

        for postion in range(0, movePostions):
            lastNode = self.get_last()
            self.remove_node(lastNode.data)
            self.add_first(Node(lastNode.data))


class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

    def __repr__(self):
        return str(self.data)


llist = LinkedList([7, 7, 3, 5])
print(llist)

# llist.remove_node(7)

# llist.add_after(3, Node(4))
# print(llist)

# llist.add_before(3, Node(8))
# print(llist)

# for node in llist:
#     print(node)

# print(llist.get_last())

llist.rotate_right(2)
print(llist)


llist = LinkedList([1, 2, 3, 4, 5])
print(llist)
llist.rotate_right(3)
print(llist)
