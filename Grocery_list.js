let grocery_list = [];
let create_list = prompt("Do you want to create a Grocery List? (y/n)").toLowerCase();

if (create_list === "y") {
    let num_items = parseInt(prompt("How many items do you want to add?"));

    for (let i = 0; i < num_items; i++) {
        let item = prompt(`Enter item ${i + 1}:`);
        grocery_list.push(item);
    }

    let grocery_list_Sort = [...grocery_list].sort();
    let grocery_list_Reverse = [...grocery_list].reverse();

    alert(`Original Grocery List: ${grocery_list.join(", ")}
Sorted Grocery List: ${grocery_list_Sort.join(", ")}
Reversed Grocery List: ${grocery_list_Reverse.join(", ")}`);
}
