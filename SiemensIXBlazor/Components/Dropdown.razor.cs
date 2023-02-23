﻿using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;
using SiemensIXBlazor.Components.Interops;
using SiemensIXBlazor.Elements;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SiemensIXBlazor.Components
{
    public partial class Dropdown
    {
        [Parameter]
        public string Id { get; set; } = string.Empty;
        [Parameter]
        public string? Anchor { get; set; }
        [Parameter]
        public string CloseBehavior { get; set; } = "both";
        [Parameter]
        public string? Header { get; set; }
        [Parameter]
        public string Placement { get; set; } = "bottom-start";
        [Parameter]
        public string PositioningStrategy { get; set; } = "fixed";
        [Parameter]
        public bool Show { get; set; } = false;
        [Parameter]
        public string? Trigger { get; set; }
        [Parameter]
        public IEnumerable<DropdownItemElement> DropdownItemElements { get; set; } = Enumerable.Empty<DropdownItemElement>();
        [Parameter]
        public EventCallback<string> ItemSelectedEvent { get; set; }
        [Parameter]
        public EventCallback<bool> ShowChangedEvent { get; set; }

        private BaseInterop _interop;

        protected async override Task OnAfterRenderAsync(bool firstRender)
        {
            if (firstRender)
            {
                _interop = new(JSRuntime);

                await _interop.AddEventListener(this, Id, "showChanged", "ShowChanged");
            }
        }

        [JSInvokable]
        public async void ShowChanged(bool value)
        {
            await ShowChangedEvent.InvokeAsync(value);
        }

        private async void ItemSelected(string label)
        {
            await ItemSelectedEvent.InvokeAsync(label);
        }
    }
}