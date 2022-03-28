import Container from '../Container/Container';
import List from '../List/List';
import SearchForm from '../SearchForm/SearchForm';
import Hero from '../Hero/Hero';

const Home = () => {
	return (
		<Container>
			<Hero></Hero>
			<SearchForm></SearchForm>
			<List></List>
		</Container>
	);
};

export default Home;
