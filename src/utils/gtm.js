export const GTM_ID = "GTM-M7RDMWP4";

export const initGTM = () => {
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
  }
};

export const pushToDataLayer = (data) => {
  if (typeof window !== "undefined" && window.dataLayer) {
    window.dataLayer.push(data);
  }
};

export const trackFormSubmission = (formName, formData = {}) => {
  pushToDataLayer({
    event: "form_submission",
    form_name: formName,
    timestamp: new Date().toISOString(),
    ...formData,
  });
};

export const trackButtonClick = (buttonName, additionalData = {}) => {
  pushToDataLayer({
    event: "button_click",
    button_name: buttonName,
    timestamp: new Date().toISOString(),
    ...additionalData,
  });
};

export const trackPageView = (pageName, pageTitle) => {
  pushToDataLayer({
    event: "page_view",
    page_name: pageName,
    page_title: pageTitle,
    timestamp: new Date().toISOString(),
  });
};

export const trackCustomEvent = (eventName, eventData = {}) => {
  pushToDataLayer({
    event: eventName,
    timestamp: new Date().toISOString(),
    ...eventData,
  });
};

export const trackUserSession = (sessionData = {}) => {
  pushToDataLayer({
    event: "user_session",
    session_id: Math.random().toString(36).substr(2, 9),
    timestamp: new Date().toISOString(),
    ...sessionData,
  });
};

export const trackBounce = (timeOnPage = 0) => {
  pushToDataLayer({
    event: "bounce",
    time_on_page_seconds: timeOnPage,
    bounce_type: timeOnPage < 30 ? "quick_bounce" : "slow_bounce",
    timestamp: new Date().toISOString(),
  });
};
