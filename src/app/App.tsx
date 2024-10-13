import { Container } from 'src/shared/ui/Container/Container';
import { FlexColumn } from 'src/shared/ui/Flex/FlexColumn';
import { Todo } from 'src/widgets/Todo';

function App() {
  return (
    <FlexColumn alignItems="center" justifyContent="center" className="wrapper">
      <Container>
        <Todo />
      </Container>
    </FlexColumn>
  );
}

export default App;
