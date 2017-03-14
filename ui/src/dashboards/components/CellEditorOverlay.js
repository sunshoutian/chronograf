import React from 'react'

import ResizeContainer from 'src/shared/components/ResizeContainer';
import QueryBuilder from 'src/data_explorer/components/QueryBuilder';
import Visualization from 'src/data_explorer/components/Visualization';

const autoRefresh = 60000

const timeRange = {
  upper: 'now()',
  lower: '5m',
}

const queries = []
const activeQueryID = null

const CellEditorOverlay = () => (
  <div className="data-explorer overlay_technology">
    <ResizeContainer>
      <Visualization
        autoRefresh={autoRefresh}
        timeRange={timeRange}
        queryConfigs={queries}
        activeQueryID={activeQueryID}
        activeQueryIndex={0}
      />
      <QueryBuilder
        queries={queries}
        autoRefresh={autoRefresh}
        timeRange={timeRange}
        setActiveQuery={() => {}}
        activeQueryID={activeQueryID}
      />
    </ResizeContainer>
  </div>
)

export default CellEditorOverlay
