/**
 * TechLaboratory Analytics Provider
 * Provides unified, privacy-respecting event dispatching for developer interactions.
 */

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

export function trackEvent({ action, category, label, value }: AnalyticsEvent): void {
  if (typeof window === 'undefined') return;

  // Check Do Not Track preference
  if (navigator.doNotTrack === '1' || (window as any).doNotTrack === '1') {
    return;
  }

  if (typeof window.gtag === 'function') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value
    });
  }
}

export function trackProductCta(product: string, ctaName: string): void {
  trackEvent({
    category: 'Product',
    action: 'click_cta',
    label: ${product}:
  });
}

export function trackDemoOpen(demoId: string): void {
  trackEvent({
    category: 'Demo',
    action: 'open_demo',
    label: demoId
  });
}

export function trackToolUsage(toolId: string, actionType: string = 'execute'): void {
  trackEvent({
    category: 'Tool',
    action: actionType,
    label: toolId
  });
}

export function trackExternalLink(url: string, targetType: 'github' | 'npm' | 'sponsor' | 'other'): void {
  trackEvent({
    category: 'ExternalLink',
    action: click_,
    label: url
  });
}
