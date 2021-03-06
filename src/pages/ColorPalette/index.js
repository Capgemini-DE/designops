import React from 'react';
import '@/lib/designops.css';
import './index.css';
import { generateId } from '@/utils/';
const basicColors = ['transparent', 'black', 'white', 'primary'];
const colors = [
  'gray',
  'red',
  'yellow',
  'green',
  'blue',
  'indigo',
  'purple',
  'pink',
];
const getbasicsColors = (colors) => {
  return colors.map((item) => (
    <tr key={generateId()}>
      <td>{`.bg-${item}`}</td>

      <td>{`.text-${item}`}</td>
      <td>
        <div className={`text-${item}`}>Aa</div>
      </td>
      <td>
        <div className={`box bg-${item}`}></div>
      </td>
    </tr>
  ));
};
const GetColors = ({ color }) => {
  const weights = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
  return weights.map((item) => (
    <tr key={generateId()}>
      <td>{`.bg-${color}-${item}`}</td>
      <td>{`.text-${color}-${item}`}</td>
      <td>
        <div className={`text-${color}-${item}`}>Aa</div>
      </td>
      <td>
        <div className={`box bg-${color}-${item}`}></div>
      </td>
    </tr>
  ));
};
const ColorPalette = () => {
  return (
    <div className="colorPalette ">
      <table>
        <thead>
          <tr>
            <th className="bg-gray-700 text-white">Background Classes</th>
            <th className="bg-gray-700 text-white">Text Classes</th>
            <th className="bg-gray-700 text-white">Text Output</th>
            <th className="bg-gray-700 text-white">Background Output</th>
          </tr>
        </thead>
        <tbody>
          {getbasicsColors(basicColors)}
          {colors.map((item) => (
            <GetColors key={generateId()} color={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ColorPalette;
