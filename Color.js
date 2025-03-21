let favorite_colors = [];

for (let i = 0; i < 3; i++) {
    let color = prompt(`Enter color ${i + 1}:`);
    favorite_colors.push(color);
    console.log("Updated colors:", favorite_colors);
}
