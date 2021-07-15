import { Button, InputWrapper } from "./style";

const Search = (props) => {
  return (
    <>
        <InputWrapper>
        {props.children}
          <Button>
            <i class="fas fa-search"></i>
          </Button>
        </InputWrapper>
    </>
  );
};

export default Search;
