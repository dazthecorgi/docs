import React from 'react';
import '../css/api-example.css';

interface ApiExampleProps {
  request: {
    method: string;
    path: string;
    headers?: Record<string, string>;
    body?: any;
  };
  response: {
    status?: number;
    headers?: Record<string, string>;
    body?: any;
  };
  showTitle?: boolean;
}

export default function ApiExample({ request, response, showTitle = false }: ApiExampleProps): JSX.Element {
  const formatValue = (value: string | number | undefined, isResponse: boolean = false) => {
    if (typeof value !== 'string') {
      return value;
    }

    // If the entire string is a placeholder
    if (value.startsWith('_') && value.endsWith('_')) {
      const innerText = value.slice(1, -1);
      const className = isResponse ? 'api-example-variable' : 'api-example-user-input';
      return <span className={className}>{innerText}</span>;
    }

    // Handle strings that contain placeholders
    const parts = value.split(/(_[^_]+_)/);
    if (parts.length > 1) {
      return (
        <>
          {parts.map((part, index) => {
            if (part.startsWith('_') && part.endsWith('_')) {
              const innerText = part.slice(1, -1);
              const className = isResponse ? 'api-example-variable' : 'api-example-user-input';
              return <span key={index} className={className}>{innerText}</span>;
            }
            return part;
          })}
        </>
      );
    }

    return value;
  };

  const formatHeaders = (headers?: Record<string, string>, isResponse: boolean = false) => {
    if (!headers) return null;
    return Object.entries(headers).map(([key, value]) => (
      <div key={key}>{key}: {formatValue(value, isResponse)}</div>
    ));
  };

  const formatBody = (body?: string, isResponse: boolean = false) => {
    if (!body) return null;
    if (typeof body === 'string') {
      return formatValue(body, isResponse);
    }
    // Check if the body is JSON and format it with proper indentation
    try {
      // Try to parse the body as JSON
      const jsonObj = JSON.parse(JSON.stringify(body));
      return JSON.stringify(jsonObj, null, 2);
    } catch (e) {
      // If it's not valid JSON, return the original string
      return body;
    }
  };

  const hasResponse = response && (response.status || response.headers || response.body);
  const hasRequest = request && (request.method || request.path || request.headers || request.body);

  return (
    <div className="api-example">
      {hasRequest && (
        <div className="api-example-section">
          {showTitle && <h4>Example Request</h4>}
          <div className="api-example-content">
            <div>{request.method} {formatValue(request.path)} HTTP/1.1</div>
            {formatHeaders(request.headers)}
            {request.body && (
              <>
                <div className="api-example-separator"></div>
                <div>{formatBody(request.body)}</div>
              </>
            )}
          </div>
          <div className="api-example-note">
            <i>Values in <span className="api-example-user-input">italics</span> indicate user input and should be replaced with actual values.</i>
          </div>
        </div>
      )}

      {hasResponse && (
        <div className="api-example-section">
          {showTitle && <h4>Example Response</h4>}
          <div className="api-example-content">
            <div>HTTP/1.1 {response.status} {response.status === 200 ? 'OK' : ''}</div>
            {formatHeaders(response.headers, true)}
            {response.body && (
              <>
                <div className="api-example-separator"></div>
                <div>{formatBody(response.body, true)}</div>
              </>
            )}
          </div>
          <div className="api-example-note">
            <i>Values in <span className="api-example-variable">italics</span> indicate variable response values.</i>
          </div>
        </div>
      )}
    </div>
  );
} 