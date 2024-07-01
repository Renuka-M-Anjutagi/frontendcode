import { useEffect, useState } from "react";
 
function DisplayAllproducts() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const container = {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        margin: "4% auto",
    };
 
    useEffect(() => {
        // API to fetch some dummy data
        fetch("https://reqres.in/api/users?page=1")
            .then((resp) => resp.json())
            .then((apiData) => {
                setData(apiData.data);
                console.log(apiData);
                setLoading(false);
            });
    }, []); // Dependency-array
 
    return (
        <div
            style={{ textAlign: "center", margin: "auto" }}
        >
            <h1 style={{ color: "green" }}>
                GeeksforGeeks
            </h1>
            <h3>
                Display values from database without
                reloading...
            </h3>
            {loading ? (
                <h4>Loading Data...</h4>
            ) : (
                <div style={container}>
                    {data.map((item) => {
                        return (
                            <div
                                key={item.id}
                                style={{
                                    minWidth: "30rem",
                                    margin: "1% auto",
                                    padding: "1%",
                                    boxShadow:
                                        "0 2px 5px grey",
                                    display: "flex",
                                    fontSize: "larger",
                                    margin: "1% auto",
                                }}
                            >
                                <span>
                                    <img
                                        style={{
                                            width: "100px",
                                            borderRadius:
                                                "50px",
                                        }}
                                        src={item.avatar}
                                    ></img>
                                </span>
                                <span
                                    style={{
                                        textAlign: "left",
                                        margin: "auto",
                                    }}
 
                                    // style={style}
                                >
                                    <div>
                                        <b>Name: </b>
                                        {
                                            item.first_name
                                        }{" "}
                                        {item.last_name} {}
                                    </div>
                                    <div>
                                        <b>Email: </b>{" "}
                                        {item.email}
                                    </div>
                                </span>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
 
export default DisplayAllproducts;