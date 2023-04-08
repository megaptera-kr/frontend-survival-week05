export default function CategoryButtonField() {
  const categories = ['전체', '중식', '한식', '일식'];

  return (
    <div style={{ marginTop: 15, marginBottom: 15 }}>
      {categories.map((category) => (
        <button
          key={category}
          style={{ marginRight: 15 }}
          type="button"
        >
          {category}
        </button>
      ))}
    </div>
  );
}
