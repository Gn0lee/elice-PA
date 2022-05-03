import React from 'react';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import { firstRenderData, freeBtnClickedData, kewordPythonData, rightClickedData } from './test/testdata';
import MockAdapter from 'axios-mock-adapter-path-params';
import { fireEvent, waitFor } from '@testing-library/dom';
import '@testing-library/jest-dom/extend-expect';

describe('App test', () => {
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

  mock
    .onGet('https://api-rest.elice.io/org/academy/course/list/', {
      params: {
        filter_conditions: JSON.stringify({
          $and: [{ title: `%%` }, { $or: [{ enroll_type: 0, is_free: true }] }],
        }),
        offset: 0,
        count: 20,
      },
    })
    .reply(200, freeBtnClickedData);

  mock
    .onGet('https://api-rest.elice.io/org/academy/course/list/', {
      params: {
        filter_conditions: JSON.stringify({
          $and: [{ title: `%파이썬%` }, { $or: [] }],
        }),
        offset: 0,
        count: 20,
      },
    })
    .reply(200, kewordPythonData);

  mock
    .onGet('https://api-rest.elice.io/org/academy/course/list/', {
      params: {
        filter_conditions: JSON.stringify({
          $and: [{ title: `%파이썬%` }, { $or: [] }],
        }),
        offset: 20,
        count: 20,
      },
    })
    .reply(200, rightClickedData);

  it('27개의 필터 버튼이 모두 보여야 한다.', async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <App />
        </BrowserRouter>,
      );
    });
    expect(await screen.findAllByTestId('filterBtn')).toHaveLength(27);
  });
  it('첫 페이지 로드 시 카드 20장이 있어야한다.(과목 20개 이상)', async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <App />
        </BrowserRouter>,
      );
    });
    expect(await screen.findAllByTestId('card')).toHaveLength(20);
  });
  it('첫 페이지 로드 시 페이지 버튼 5개가 있어야한다.(과목 80개 초과)', async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <App />
        </BrowserRouter>,
      );
    });
    expect(await screen.findAllByTestId('page-btn')).toHaveLength(5);
  });
  it('첫 페이지 로드 시 "전체 과목수 170개"가 나타난다.(과목 170개인 경우)', async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <App />
        </BrowserRouter>,
      );
    });
    expect(await screen.findByTestId('num-course')).toHaveTextContent('전체 170개');
  });
  it('무료 버튼 클릭 시 "price=무료" 쿼리가 등록되어야 한다.', async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <App />
        </BrowserRouter>,
      );
    });

    const freeBtn = screen.getByRole('button', { name: '무료' });
    fireEvent.click(freeBtn);

    await act(async () => {
      expect(window.location.search).toBe('?price=%EB%AC%B4%EB%A3%8C');
    });
  });
  it('무료 버튼 클릭 시 전체 과목수가 68개로 변경된다.', async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <App />
        </BrowserRouter>,
      );
    });

    const freeBtn = screen.getByRole('button', { name: '무료' });
    fireEvent.click(freeBtn);

    await waitFor(async () => {
      expect(await screen.findByTestId('num-course')).toHaveTextContent('전체 68개');
    });
  });
  it('"파이썬" 키워드 입력 시 title 쿼리가 변경된다.', async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <App />
        </BrowserRouter>,
      );
    });

    const keywordInput = screen.getByRole('textbox');
    fireEvent.change(keywordInput, { target: { value: '파이썬' } });

    await waitFor(async () => {
      expect(window.location.search).toBe('?keyword=%25%ED%8C%8C%EC%9D%B4%EC%8D%AC%25');
    });
  });
  it('"파이썬" 키워드 입력 시 전체 과목수가 40개로 변경된다.', async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <App />
        </BrowserRouter>,
      );
    });

    const keywordInput = screen.getByRole('textbox');
    fireEvent.change(keywordInput, { target: { value: '파이썬' } });

    await waitFor(async () => {
      expect(await screen.findByTestId('num-course')).toHaveTextContent('전체 40개');
    });
  });
  it('오른쪽 화살표 클릭시 페이지 버튼 1,2,3,4,5,6으로 변경', async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <App />
        </BrowserRouter>,
      );
    });

    const rightArrow = screen.getByTestId('right-arrow');
    fireEvent.click(rightArrow);

    await waitFor(async () => {
      const pageBtns = await screen.findAllByTestId('page-btn');
      const a: (string | null)[] = [];
      pageBtns.forEach((elem) => a.push(elem.textContent));
      expect(a).toStrictEqual(['1', '2', '3', '4', '5', '6']);
    });
  });
});
