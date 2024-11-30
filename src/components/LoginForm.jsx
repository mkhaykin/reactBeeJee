export default function LoginForm() {
    function handleSubmit(event) {
        event.preventDefault();
    
        const options = {
          method: "POST",
          headers: {
            "access-control-allow-origin": "*",
            Accept: "application/json",
            "Content-Type": "application/json",
            Charset: "utf8",
          },
          body: JSON.stringify({
            user_name: event.target.user_name.value,
            password: event.target.password.value,
          }),
        };
        fetch(`${import.meta.env.VITE_API_URL}/api/login`, options)
          .then(function (res) {
            console.log(res);
          })
          .catch(function (res) {
            console.log(res);
          });
      }

    return (
        <div className="content-section">
        <form onSubmit={handleSubmit}>
            <fieldset className="form-group">
                <legend className="border-bottom mb-4">Log In</legend>
                <div className="form-group">
                    <label className="form-control-label" htmlFor="user_name">User name</label>
                    
                        <input className="form-control form-control-lg" id="user_name" name="user_name" required type="text" value="" />
                    
                </div>
                <div className="form-group">
                    <label className="form-control-label" htmlFor="password">Password</label>
                    
                        <input className="form-control form-control-lg" id="password" name="password" required type="password" value="" />
                    
                </div>
            </fieldset>
            <div className="form-group">
          <button className="btn btn-outline-info" type="Submit">
            Add task
          </button>
          {/* <button className="btn btn-outline-info" onClick={AddTask}>
            Go Back
          </button> */}
        </div>
        </form>
        </div>
    )
}