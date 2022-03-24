import "./topbar.css";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarLeft">
        <span>App</span>
      </div>
      <div className="topbarCenter"></div>
      <div className="topbarRight">
        <button>Button</button>
        <button>Button</button>
        <button>Button</button>
        <button>Button</button>
      </div>
    </div>
  );
}
