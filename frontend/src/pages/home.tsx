

function Home() {
    return (
        <>
        <div className="flex justify-between items-center mb-4">
            <div>
                <h2>Task Manager</h2>
            </div>
            <div>
                <button className="btn" onClick={() => window.location.href = "/login"}>Login</button>
            </div>
        </div>
        <div>
            <p>Welcome to the Task Manager</p>
        </div>
        </>
    )
}

export default Home;