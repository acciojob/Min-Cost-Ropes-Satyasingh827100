function mincost(ropes) {
  // Import PriorityQueue class
  const { PriorityQueue } = require('@datastructures-js/priority-queue');

  // Create a priority queue with custom comparator
  const pq = new PriorityQueue({
    comparator: (a, b) => a - b,
  });

  // Add all ropes to the priority queue
  ropes.forEach(rope => pq.enqueue(rope));

  let totalCost = 0;

  // Continue until only one rope is left in the priority queue
  while (pq.size() > 1) {
    // Extract the two smallest ropes
    const rope1 = pq.dequeue();
    const rope2 = pq.dequeue();

    // Connect the ropes and add the cost
    const newRope = rope1 + rope2;
    totalCost += newRope;

    // Add the new rope back to the priority queue
    pq.enqueue(newRope);
  }

  return totalCost;
}