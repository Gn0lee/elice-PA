import React from 'react';
import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import { firstRenderData } from './test/testdata';
import MockAdapter from 'axios-mock-adapter-path-params';
import { waitFor } from '@testing-library/dom';
import '@testing-library/jest-dom/extend-expect';
function setup() {
  return render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );
}

describe('첫 화면 렌더링 테스트', () => {
  const mock = new MockAdapter(axios);

  mock
    .onGet('https://api-rest.elice.io/org/academy/course/list/', {
      params: {
        filter_conditions: JSON.stringify({
          $and: [{ title: `%%` }, { $or: [] }],
        }),
        offset: 0,
        count: 20,
      },
    })
    .reply(200, firstRenderData);
  it('필터 버튼이 모두 보여야 한다.', async () => {
    act(() => {
      setup();
    });
    // await waitFor(() => {
    //   const a = screen.getByRole('button', { name: '과목' });
    //   expect(a).toBeInTheDocument();
    // });
    const a = await screen.findByRole('button', { name: '과목' });
    expect(a).toBeInTheDocument();
  });
  it('첫 화면에 카드 20장이 있어야한다.', async () => {
    act(() => {
      setup();
    });
    expect(await screen.findAllByTestId('card')).toHaveLength(20);
  });
});
