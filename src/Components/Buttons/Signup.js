import "./Buttons.css";
export default function Signup() {
  return (
    <>
      <div className="container9">
        <h2 id="tag">Sign Up</h2>
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
          
        </div>
        <div>
          <button id="submit" className="btn btn-primary">Submit</button>
        </div>
      </div>

    </>
  );
}
