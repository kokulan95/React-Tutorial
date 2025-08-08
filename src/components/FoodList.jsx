
// Component: Individual item
function Item({ name, isPacked }) {
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            {isPacked ? (
                <span>
          <del>{name}</del> ✅
        </span>
            ) : (
                <span>{name}</span>
            )}
        </li>
    );
}

// Component: The whole packing list
export default function FoodList() {
    const items = [
        { id: 1, name: "Döner", isPacked: true, fastFood: true, isVegetarian: false },
        { id: 2, name: "Pizza", isPacked: true, fastFood: true, isVegetarian: true },
        { id: 3, name: "Burger", isPacked: true, fastFood: true, isVegetarian: false },
        { id: 4, name: "Falafel", isPacked: false, fastFood: true, isVegetarian: true },
        { id: 5, name: "Noch mehr Döner", isPacked: false, fastFood: true, isVegetarian: false },
    ];

    return (
        <div className="container mt-4">
            <div className="card">
                <div className="card-header bg-primary text-white">
                    <h4>Kobi's (Fast-)Food List (nur nicht-vegetarisch)</h4>
                </div>
                <ul className="list-group list-group-flush">
                    {items
                        .filter(item => !item.isVegetarian)
                        .map(item => (
                            <Item
                                key={item.id}
                                name={item.name}
                                isPacked={item.isPacked}

                            />
                        ))}
                </ul>
            </div>
        </div>
    );
}
