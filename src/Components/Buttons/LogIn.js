import "./Buttons.css";
export default function LogIn() {
  return (
    <>
      <div className="container7">
        <h2 id="tag">Log In</h2>
        <div id="container8">
          <div class="form-floating mb-3">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">Password</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Confirm Password"
            />
            <label for="floatingPassword">Confirm Password</label>
          </div>
        </div>
        <div>
          <button id="submit" className="btn btn-primary">Submit</button>
        </div>
      </div>

    </>
  );
}
