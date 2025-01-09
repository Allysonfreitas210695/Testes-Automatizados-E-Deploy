import { render } from '@testing-library/react-native';
import { Input } from '@components/Input';

describe('Component: Input', () => {
  it('should render without activity indicator when isLoading is false', () => {
    const { queryByTestId } = render(<Input isLoading={false} />);
    const activityIndicator = queryByTestId('activity-indicator');
    expect(activityIndicator).toBeNull();
  });

  it('should render with activity indicator when isLoading is true', () => {
    const { getByTestId } = render(<Input isLoading={true} />);
    const activityIndicator = getByTestId('activity-indicator');
    expect(activityIndicator).toBeTruthy(); 
  });
});
