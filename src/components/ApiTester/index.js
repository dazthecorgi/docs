import React, { useState } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

/**
 * ApiTester component for testing QStorage API calls
 * This component creates a UI for testing API calls that will be intercepted
 * and redirected to a local WASM implementation
 */
export default function ApiTester({ 
  operation, 
  parameters = [], 
  description,
  exampleResponse,
}) {
  const {siteConfig} = useDocusaurusContext();
  const isEnabled = siteConfig.customFields?.apiTesterEnabled !== false;

  const [paramValues, setParamValues] = useState({});
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleParamChange = (paramName, value) => {
    setParamValues(prev => ({
      ...prev,
      [paramName]: value
    }));
  };

  const handleFileChange = (paramName, event) => {
    const file = event.target.files[0];
    if (file) {
      handleParamChange(paramName, file);
    }
  };

  const executeCall = async () => {
    setLoading(true);
    setError(null);
    
    try {
      // In a real implementation, this would make an actual API call
      // For now, we'll simulate a response after a short delay
      
      // This is where the WASM interception would happen in a real implementation
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Simulate a successful response
      setResponse(exampleResponse || {
        success: true,
        operation: operation,
        timestamp: new Date().toISOString()
      });
    } catch (err) {
      setError(err.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.apiTester}>
      <h3>Test {operation}</h3>
      <p className={styles.description}>{description}</p>
      {!isEnabled ? (
        <div className={styles.comingSoon}>
          <h4>Coming Soon</h4>
          <p>This feature is currently under development and will be available soon.</p>
        </div>
      ) : (
        <>
          <div className={styles.parametersContainer}>
            <h4>Parameters</h4>
            {parameters.map((param) => (
              <div key={param.name} className={styles.parameterRow}>
                <label htmlFor={param.name}>
                  {param.name}
                  {param.required && <span className={styles.required}>*</span>}:
                </label>
                
                {param.type === 'file' ? (
                  <input
                    type="file"
                    id={param.name}
                    onChange={(e) => handleFileChange(param.name, e)}
                  />
                ) : param.type === 'textarea' ? (
                  <textarea
                    id={param.name}
                    placeholder={param.placeholder || ''}
                    value={paramValues[param.name] || ''}
                    onChange={(e) => handleParamChange(param.name, e.target.value)}
                  />
                ) : (
                  <input
                    type="text"
                    id={param.name}
                    placeholder={param.placeholder || ''}
                    value={paramValues[param.name] || ''}
                    onChange={(e) => handleParamChange(param.name, e.target.value)}
                  />
                )}
                
                {param.description && (
                  <div className={styles.paramDescription}>{param.description}</div>
                )}
              </div>
            ))}
          </div>
          
          <button 
            className={styles.executeButton} 
            onClick={executeCall}
            disabled={loading}
          >
            {loading ? 'Processing...' : 'Execute'}
          </button>
          
          {error && (
            <div className={styles.error}>
              <h4>Error</h4>
              <pre>{error}</pre>
            </div>
          )}
          
          {response && (
            <div className={styles.response}>
              <h4>Response</h4>
              <pre>{JSON.stringify(response, null, 2)}</pre>
            </div>
          )}
        </>
      )}
    </div>
  );
} 