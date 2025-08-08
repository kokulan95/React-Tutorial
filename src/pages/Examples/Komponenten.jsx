// App.jsx


import HelloWorld , {Message} from "../../components/HelloWorld.jsx";

function App() {
    return (
        <div className="container mt-4">
            <h1 className="mb-4">Fotos</h1>

            <div className="row g-4">
                <div className="col-md-4">
                    <HelloWorld
                        name="Blue Nana"
                        imageUrl="https://i.imgur.com/Sd1AgUOm.jpg"
                        message="Mit Props lassen sich Komponenten individuell anpassen."
                    />
                </div>

                <div className="col-md-4">
                    <HelloWorld
                        name="Big Bellies"
                        imageUrl="https://i.imgur.com/AlHTAdDm.jpg"
                        message="Komponente mit einem anderen Text"

                    />
                </div>

                <div className="col-md-4">
                    <HelloWorld
                        name="Hippos"
                        imageUrl="https://i.imgur.com/6o5Vuyu.jpg"
                    />
                </div>

                <div className="col-md-4">
                    <HelloWorld
                        name="Lunar Landscape"
                        imageUrl="https://i.imgur.com/rN7hY6om.jpg"
                    />
                </div>
            </div>

        </div>

    );
}

export default App;
