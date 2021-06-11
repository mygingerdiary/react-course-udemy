import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
    { id: 'q1', author: 'Patrycja', text: 'Reast is fun!'},
    { id: 'q2', author: 'Papi', text: 'Reast is the best!'},
]

const AllQuotes = () => {
    return(
        <QuoteList quotes={DUMMY_QUOTES} />
    );
};

export default AllQuotes;