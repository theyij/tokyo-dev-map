function browserRouter() {
  const browserRouter = (
  <BrowserRouter>
    <div>
    <h1>React Router Simple Starter</h1>
      <ul className="header">
        <li><Link exact to="/">Home</Link> </li>
        <li><Link to="/ProfilePages">Profile</Link></li>
      </ul>
    <div className="content">
    <Route path="/profile" component={ProfilePages} />
  </div>
  </div>
  </BrowserRouter>
    )
}




const BaseLayout = () => (
  <div className="base">
    <header>
      <p>React Router v4 Browser Example</p>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/components/profile'>Profile</Link></li>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/signup'>Signup</Link></li>
            <li><Link to='/add'>Add</Link></li>
            <li><Link to='/edit'>Edit</Link></li>
            <li><Link to='/delete'>Delete</Link></li>
          </ul>
        </nav>
    </header>

    <div className="container">
      <Route path="/" exact component={HomePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/signup" component="{SignupPage}" />
      <Route path="/add" component="{AddPage}" />
      <Route path="/edit" component="{EditPage}" />
      <Route path="/delete" component="{DeletePage}" />
      <Route path="./profile" component="{ProfilePages}" />
    </div>
    <footer>
        React Router v4 Browser Example (c) 2017
    </footer>
  </div>
)

const HomePage = () => <div>This is a Home Page</div>
const LoginPage = () => <div>This is a Login Page</div>
const SignupPage = () => <div>This is a Signup Page</div>
const ProfilePage = () => <div>This is the Profile Page</div>
const AddPage = () => <div>This is an Add Page</div>
const EditPage = () => <div>This is a Edit Page</div>
const DeletePage = () => <div>This is a Delete Page</div>

const App = () => (
  <BrowserRouter>
    <BaseLayout />
  </BrowserRouter>
)
render(<App />, document.getElementById('root'))
