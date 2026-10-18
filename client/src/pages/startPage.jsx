import './StartPage.css'

export default function StartPage(props) {

    function logIn(formData) {
        const username = formData.get('username');
        const password = formData.get('password');
        try {
            if (!username || !password) {
                throw new Error("Username and password are required.");
            }
            
        console.log("Form submitted");
        } catch (error) {
            console.error(error.message);
        }
    }

    return (
        <main className="start-page">
            <section className="hero">
                <h1>Quizzical</h1>
                <p>Test your knowledge with our fun trivia quiz!</p>
                <button className="start-button" disabled>Start Quiz</button>
            </section>
            <section className="leaderboard">
                <section className="leaderboard-login">
                    <h2>Login or Sign Up</h2>
                    <form className="LoginForm" action={logIn}>
                        <label>
                            Username:
                            <input type="text" placeholder="Username" required />
                        </label>
                        <label>
                            Password:
                            <input type="password" placeholder="Password" required />
                        </label>
                        <button type="submit">Submit</button>
                    </form>
                    <small>Don't have an account? Fill in your details and submit to create one.</small>
                </section>
                <section className="leaderboard-table">
                    <h2>Leaderboard</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Rank</th>
                                <th>Username</th>
                                <th>Correct Answers</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>user1</td>
                                <td>100</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>user2</td>
                                <td>90</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </section>
        </main>
    )
}