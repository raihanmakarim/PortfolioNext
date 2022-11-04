import style from "./style.module.scss";
import HorizontalScrolling from "./components/HorizontalScrolling/HorizontalScrolling";
const Page = () => {
  const { background, page } = style;
  return (
    <div className={page}>
      <div className={background}>
        <h1>Page</h1>
        <p>Page content</p>
      </div>
      <div className={background}>
        <h1>Page</h1>
        <p>Page content</p>
      </div>
      <div className={background}>
        <h1>Page</h1>
        <p>Page content</p>
      </div>
      <HorizontalScrolling />
    </div>
  );
};

export default Page;
