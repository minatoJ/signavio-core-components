/*******************************************************************************
 * Signavio Core Components
 * Copyright (C) 2012  Signavio GmbH
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 ******************************************************************************/

if (!ORYX.Plugins) {
    ORYX.Plugins = new Object();
}

/**
 * This plugin is responsible for displaying loading indicators and to prevent
 * the user from accidently unloading the page by, e.g., pressing the backspace
 * button and returning to the previous site in history.
 * @param {Object} facade The editor plugin facade to register enhancements with.
 */
ORYX.Plugins.Loading = {

    construct: function(facade){
    
        this.facade = facade;
        
        // The parent Node
        this.node = ORYX.Editor.graft("http://www.w3.org/1999/xhtml", this.facade.getCanvas().getHTMLContainer().parentNode, ['div', {
            'class': 'LoadingIndicator'
        }, '']);
        
        this.facade.registerOnEvent(ORYX.CONFIG.EVENT_LOADING_ENABLE, this.enableLoading.bind(this));
        this.facade.registerOnEvent(ORYX.CONFIG.EVENT_LOADING_DISABLE, this.disableLoading.bind(this));
		this.facade.registerOnEvent(ORYX.CONFIG.EVENT_LOADING_STATUS, this.showStatus.bind(this));
        
        this.disableLoading();
    },
    
    enableLoading: function(options){
		if(options.text) 
			this.node.innerHTML = options.text + "...";
		else
			this.node.innerHTML = ORYX.I18N.Loading.waiting;
		this.node.removeClassName('StatusIndicator');
		this.node.addClassName('LoadingIndicator');
        this.node.style.display = "block";
		
		var pos = this.facade.getCanvas().rootNode.parentNode.parentNode.parentNode.parentNode;

		this.node.style.top 		= pos.offsetTop + 'px';
		this.node.style.left 		= pos.offsetLeft +'px';
					
    },
    
    disableLoading: function(){
        this.node.style.display = "none";
    },
	
	showStatus: function(options) {
		if(options.text) {
			this.node.innerHTML = options.text;
			this.node.addClassName('StatusIndicator');
			this.node.removeClassName('LoadingIndicator');
			this.node.style.display = 'block';

			var pos = this.facade.getCanvas().rootNode.parentNode.parentNode.parentNode.parentNode;

			this.node.style.top 	= pos.offsetTop + 'px';
			this.node.style.left 	= pos.offsetLeft +'px';
												
			var tout = options.timeout ? options.timeout : 2000;
			
			window.setTimeout((function(){
            
                this.disableLoading();
                
            }).bind(this), tout);
		}
		
	}
}

ORYX.Plugins.Loading = Clazz.extend(ORYX.Plugins.Loading);
