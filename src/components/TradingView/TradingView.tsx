import React from "react";

import dynamic from "next/dynamic";

const AdvancedRealTimeChartT = dynamic(
  () =>
    import("react-ts-tradingview-widgets").then((w) => w.AdvancedRealTimeChart),
  {
    ssr: false,
  }
);

const TradingView = () => {
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone as any;

  return (
    <div id="trading_view">
      <AdvancedRealTimeChartT
        theme="dark"
        height={592}
        width="100%"
        style="3"
        locale="en"
        container_id="trading_view"
        allow_symbol_change={false}
        timezone={timezone}
        interval="15"
        // disabled_features={['header_resolutions']}
        disabled_features={["header_compare"]}
      />
    </div>
  );
};

export default TradingView;
