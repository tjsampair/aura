/*
 * Copyright (C) 2012 salesforce.com, inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
({
	 
	render: function(component, helper) {
        var attrs = component.getAttributes(),
			domId = attrs.getValue("domId").getValue(),
			concreteCmp = component.getConcreteComponent(),
			parentCmp = concreteCmp.getSuper(),
			globalId = concreteCmp.getGlobalId(),
			labelPos = attrs.get("labelPosition");
        
		if (!domId) {
			helper.setAttribute(component, {key: 'domId', value: globalId});
		}
						
		return this.superRender();
	},
	
	
	afterRender: function(component, helper) {
        this.superAfterRender();
		
        helper.addInputDomEvents(component);
    },
    
    rerender: function(component, helper) {
        helper.handleErrors(component);
        this.superRerender();
    }
})
