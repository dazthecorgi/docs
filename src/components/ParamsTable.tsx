import React from 'react';

interface Parameter {
  name: string;
  type: string;
  description: string;
  required: boolean;
  placeholder?: string;
  validValues?: string[];
  constraints?: string[];
}

interface ResponseElement {
  name: string;
  description: string;
  validValues?: string[];
  constraints?: string[];
  required: boolean;
  type: string;
}

interface ParamsTableProps {
  parameters?: Parameter[];
  responseElements?: ResponseElement[];
  type?: 'parameter' | 'response';
  typesEnabled?: boolean;
}

export default function ParamsTable({ parameters, responseElements, type = 'parameter', typesEnabled = true }: ParamsTableProps): JSX.Element {
  if (type === 'response' && responseElements) {

    if (responseElements && responseElements.length === 0) {
      return (
        <p>If the action is successful, the service sends back an HTTP 204 response with an empty HTTP body.</p>
      );
    }

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Required</th>
            {typesEnabled && <th>Type</th>}
          </tr>
        </thead>
        <tbody>
          {responseElements.map((elem) => (
            <tr key={elem.name}>
              <td>{elem.name}</td>
              <td dangerouslySetInnerHTML={{ __html: elem.description + 
                (elem.validValues ? '<br/><br/>Valid values: <span class="valid-value">' + elem.validValues.join(' | ') + '</span>' : '') +
                (elem.constraints ? '<br/><br/>Constraints: <span class="valid-value">' + elem.constraints.join(' | ') + '</span>' : '')
              }}></td>
              <td>{elem.required ? 'Yes' : 'No'}</td>
              {typesEnabled && <td dangerouslySetInnerHTML={{ __html: elem.type || 'String' }}></td>}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Required</th>
          {typesEnabled && <th>Type</th>}
        </tr>
      </thead>
      <tbody>
        {parameters?.map((param) => (
          <tr key={param.name}>
            <td>{param.name}</td>
            <td dangerouslySetInnerHTML={{ __html: param.description + 
              (param.validValues ? '<br/><br/>Valid values: <span class="valid-value">' + param.validValues.join(' | ') + '</span>' : '') +
              (param.constraints ? '<br/><br/>Constraints: <span class="valid-value">' + param.constraints.join(' | ') + '</span>' : '')
            }}></td>
            <td>{param.required ? 'Yes' : 'No'}</td>
            {typesEnabled && <td dangerouslySetInnerHTML={{ __html: param.type || 'String' }}></td>}
          </tr>
        ))}
      </tbody>
    </table>
  );
} 