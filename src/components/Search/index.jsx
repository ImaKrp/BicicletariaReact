import { Button, Input, InputWrapper } from "./style";

const Search = () => {
  return (
    <>
        <InputWrapper>
          <Input type="text" placeholder="O que você procura?" />
          <Button>
            <i class="fas fa-search"></i>
          </Button>
        </InputWrapper>
    </>
  );
};

export default Search;
