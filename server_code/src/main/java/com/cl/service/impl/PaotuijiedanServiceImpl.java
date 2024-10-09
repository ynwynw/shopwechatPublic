package com.cl.service.impl;

import org.springframework.stereotype.Service;
import java.util.Map;
import java.util.List;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.plugins.Page;
import com.baomidou.mybatisplus.service.impl.ServiceImpl;
import com.cl.utils.PageUtils;
import com.cl.utils.Query;


import com.cl.dao.PaotuijiedanDao;
import com.cl.entity.PaotuijiedanEntity;
import com.cl.service.PaotuijiedanService;
import com.cl.entity.view.PaotuijiedanView;

@Service("paotuijiedanService")
public class PaotuijiedanServiceImpl extends ServiceImpl<PaotuijiedanDao, PaotuijiedanEntity> implements PaotuijiedanService {
	
	
    @Override
    public PageUtils queryPage(Map<String, Object> params) {
        Page<PaotuijiedanEntity> page = this.selectPage(
                new Query<PaotuijiedanEntity>(params).getPage(),
                new EntityWrapper<PaotuijiedanEntity>()
        );
        return new PageUtils(page);
    }
    
    @Override
	public PageUtils queryPage(Map<String, Object> params, Wrapper<PaotuijiedanEntity> wrapper) {
		  Page<PaotuijiedanView> page =new Query<PaotuijiedanView>(params).getPage();
	        page.setRecords(baseMapper.selectListView(page,wrapper));
	    	PageUtils pageUtil = new PageUtils(page);
	    	return pageUtil;
 	}
    
	@Override
	public List<PaotuijiedanView> selectListView(Wrapper<PaotuijiedanEntity> wrapper) {
		return baseMapper.selectListView(wrapper);
	}

	@Override
	public PaotuijiedanView selectView(Wrapper<PaotuijiedanEntity> wrapper) {
		return baseMapper.selectView(wrapper);
	}


}
