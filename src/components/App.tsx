import Container from "./layout/Container";
import Footer from "./layout/Footer";
import HasTagList from "./hashtag/HasTagList";
import { useEffect } from "react";
import { useFeedbackItemsStore } from "./stores/feedbackItemStore";

function App() {
  const fetchFeedbackItems = useFeedbackItemsStore(
    (state) => state.fetchFeedbackItems
  );

  useEffect(() => {
    fetchFeedbackItems();
  }, [fetchFeedbackItems]);

  return (
    <div className="app">
      <Footer />

      <Container />
      <HasTagList />
    </div>
  );
}

export default App;
