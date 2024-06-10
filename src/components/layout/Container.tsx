import FeedBackList from "../feedback/FeedBackList";
import Header from "./Header";

export default function Container() {
  return (
    <main className="container">
      <Header />
      <FeedBackList />
    </main>
  );
}
