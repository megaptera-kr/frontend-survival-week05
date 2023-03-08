import { render, screen, fireEvent } from '@testing-library/react';
import TextField from './TextField';

describe('TextField test', () => {
    const setFilterText = jest.fn();

    const renderTextField = () => {
        render(<TextField label="Label" placeholder="TextField Placeholder" filterText="" setFilterText={setFilterText} />)
    }

    beforeEach(() => {
        setFilterText.mockClear();
    });

    it('render', () => {
        renderTextField();
        screen.getByLabelText(/Label/);
        screen.getByPlaceholderText(/Placeholder/);
    });

    it('change event', () => {
        renderTextField();
        fireEvent.change(screen.getByLabelText('Label'), {
            target: {
                value: '입력되었습니다.',
            },
        });
        expect(setFilterText).toBeCalledWith('입력되었습니다.');
    })
})