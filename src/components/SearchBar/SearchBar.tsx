import { ChangeEvent } from "react"

interface SearchBarProps {
  searchKeyword: string
  onChangeSearchKeyword : (keyword : string) => void
}

const SearchBar = ({searchKeyword, onChangeSearchKeyword} : SearchBarProps) => {
  const handleChangeSearchKeyword = (event : ChangeEvent<HTMLInputElement>) => {
    onChangeSearchKeyword(event.target.value)
  }
  return (
    <>
      <input type="text" value={searchKeyword} onInput={handleChangeSearchKeyword}/>
    </>
  )
}

export default SearchBar