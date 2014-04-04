/**
 * Created by Stefano on 31/03/14.
 */

test("DoubleLinkedList - Push test", function () {
	var list = new DoubleLinkedList();
	list.pushFront(0);
	list.pushFront(1);
	list.pushBack(2);
	list.pushBack(3);
	deepEqual(list.getItem(0), 1, "Push front 1");
	deepEqual(list.getItem(1), 0, "Push front 0");
	deepEqual(list.getItem(2), 2, "Push back 2");
	deepEqual(list.getItem(3), 3, "Push back 3");
});

test("DoubleLinkedList - Pop test", function () {
	var list = new DoubleLinkedList();
	list.pushFront(0);
	list.pushFront(1);
	list.pushBack(2);
	list.pushBack(3);
	deepEqual(list.popBack(), 3, "Pop back 3");
	deepEqual(list.popFront(), 1, "Pop front 1");
	deepEqual(list.popBack(), 2, "Pop back 2");
	deepEqual(list.popFront(), 0, "Pop front 0");
});

test("DoubleLinkedList - Remove at test", function () {
	var list = new DoubleLinkedList();
	list.pushFront(0);
	list.pushFront(1);
	list.pushBack(2);
	list.pushBack(3);
	deepEqual(list.removeAt(1), 0, "Remove at 1");
	deepEqual(list.removeAt(1), 2, "Remove at 1");
	deepEqual(list.removeAt(1), 3, "Remove at 1");
	deepEqual(list.removeAt(0), 1, "Remove at 0");
});

test("DoubleLinkedList - Sort test", function () {
	var list = new DoubleLinkedList();
	const length = 100;
	for (var i = 0; i < length; i++)
		list.pushFront(i);

	list.sort();
	deepEqual(list.getItem(0), 0, "Sort");
	deepEqual(list.getItem(length - 1), length - 1, "Sort");
});

test("DoubleLinkedList - Sort with callback test", function () {
	var list = new DoubleLinkedList();
	const length = 100;

	for (var i = 0; i < length; i++)
		list.pushFront({value: i});

	list.sort(
		function (item) {
			return item.value;
		}
	);
	deepEqual(list.getItem(0).value, 0, "Sort");
	deepEqual(list.getItem(length - 1).value, length - 1, "Sort");
});