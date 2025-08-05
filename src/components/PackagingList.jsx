
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
export default function PackingList() {
    return (
        <div className="container mt-4">
            <div className="card">
                <div className="card-header bg-primary text-white">
                    <h4>Kobi's Packing List</h4>
                </div>
                <ul className="list-group list-group-flush">
                    <Item isPacked={true} name="Space suit" />
                    <Item isPacked={true} name="Helmet with a golden leaf" />
                    <Item isPacked={false} name="Photo of Tam" />
                    <Item isPacked={false} name="Snacks for orbit" />
                </ul>
            </div>
        </div>
    );
}
