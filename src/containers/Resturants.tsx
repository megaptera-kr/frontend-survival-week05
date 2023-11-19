import ResturantsList from './ResturantsList';

export const Loading = () => {
  return <span>Loading...</span>;
};

const Restaurants = () => {
  return (
    <div data-testid="Restaurants" className="row">
      <ul className="column">
        <li>식당 이름</li>
        <li>종류</li>
        <li>메뉴</li>
      </ul>
      <ResturantsList />
    </div>
  );
};

export default Restaurants;
