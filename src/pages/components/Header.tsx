export default function Header() {
  return (
    <header className="header">
      {/* light-dark */}
      <div className="top-content">
        <h1 className="title">todo</h1>
        <div className="switch-theme" title="light-dark"></div>
      </div>

      {/* add todo */}
      <div className="container-add">
        <label htmlFor="input-add_todo" className="label-input_add"></label>
        <input type="text" name="add todo" id="input-add_todo" className="input-add_todo" placeholder="Create a new todo..."/>
      </div>
    </header>
  );
};
